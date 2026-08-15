import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const checks = [];
const check = (name, pass, details) => checks.push({ name, pass: !!pass, details });

const types = read('src/types.ts');
const server = read('server.ts');
const governance = read('src/governance.ts');
const schema = read('schemas/SCHEMA_SPATIAL_DNA.md');
const handoff = read('contracts/HANDOFF_SPECIFICATIONS.md');
const audit = read('src/components/AuditValidationModal.tsx');
const custom = read('src/components/CustomInputModal.tsx');
const maraView = read('src/components/MaraView.tsx');
const samples = read('src/data/sampleProfiles.ts');
const repositoryMirror = read('src/data/mockRepository.ts');

check('Candidate Core is first-class', types.includes('interface CandidateCore') && types.includes('candidateCore: CandidateCore'), 'Canonical runtime candidate requires Candidate Core.');
check('IDENTITY is not EvidenceDomain', !/export type EvidenceDomain\s*=([\s\S]*?)IDENTITY/.test(types), 'EvidenceDomain excludes IDENTITY.');
check('Five-domain schema documented', schema.includes('Evidence Registry — Five Domains') && schema.includes('`IDENTITY` is not a legal evidence domain'), 'Schema states Candidate Core + five domains.');
check('Legacy evidence packet contract removed', !types.includes('LegacyEvidencePacket') && !governance.includes('modern.confidence') && !governance.includes('modern.authority'), 'Runtime no longer accepts combined legacy authority/confidence packets.');
check('Authority separated from extraction confidence', types.includes('authorityCeiling') && types.includes('extractionConfidence') && types.includes('sourceLineageId') && types.includes('propositionId'), 'Evidence model contains independent authority/lineage/proposition fields.');
check('Sample fixtures have no IDENTITY evidence domain', !/\bIDENTITY\s*:/.test(samples) && !/domain:\s*['"]IDENTITY['"]/.test(samples), 'Candidate identity appears only in Candidate Core.');
check('Sample fixtures have no legacy authority field', !/\bauthority\s*:\s*['"](?:DIRECT|CONTRIBUTORY|STATIONARY)['"]/.test(samples), 'Fixtures use candidateRelationship/sourceClass/authorityCeiling instead of legacy authority.');
check('Sample fixtures have no legacy confidence field', !/\bconfidence\s*:\s*[0-9]/.test(samples), 'Fixtures use extractionConfidence independently from authorityCeiling.');
check('Sample fixtures contain canonical evidence metadata', samples.includes('candidateCore:') && samples.includes('authorityCeiling:') && samples.includes('extractionConfidence:') && samples.includes('sourceLineageId:') && samples.includes('propositionId:'), 'Fixture evidence exercises repaired ontology fields.');
check('Repository inspector mirror is repaired', repositoryMirror.includes('Candidate Core plus a five-domain Evidence Registry') && !repositoryMirror.includes('The Evidence Registry (The Six Domains)') && !repositoryMirror.includes('This *is* a candidate deficiency/gap'), 'Embedded inspector documentation does not reintroduce stale ontology.');
check('Renderer endpoint is snapshot-only', /const \{ frozenSnapshot, artifactType \} = req\.body/.test(server) && !/artifact-render[\s\S]{0,500}candidateDNA/.test(server), 'Artifact endpoint destructures only snapshot and artifact type.');
check('No fabricated evidence fallback', !server.includes("evidence_id: link.evidenceId") && !server.includes("domain: 'WORK_HISTORY',\n            governing_verb: 'Executed'") && server.includes('throw new Error(`Artifact traceability reference is outside frozen boundary'), 'Missing renderer provenance fails closed.');
check('Canonical snapshot hashing exists', governance.includes('canonicalStringify') && server.includes('sha256(snapshotMaterial(snapshotBase))') && server.includes('sha256(snapshotMaterial(frozenSnapshot))'), 'Create and verify paths hash canonical material payload.');
check('Model classification remains unverified', server.includes("validationStatus = 'UNVERIFIED'") && handoff.includes('model-proposed `HOT_MATCH` is not independently validated'), 'No model self-certification of classification.');
check('Executable gate state exists', governance.includes('evaluateScoutGates') && types.includes('ExecutionGateState') && server.includes('MARA gate blocked by deterministic architecture validation'), 'Runtime gate state controls MARA handoff.');
check('Audit is runtime-derived', audit.includes('validateCandidateDNA') && audit.includes('validateQueryBundle') && audit.includes('validateFrozenSnapshot') && !audit.includes('100% Compliant') && !audit.includes('passed: true'), 'Audit no longer hardcodes success.');
check('Unsupported-negative rule is causal', governance.includes("atom.semanticBand === 'FLOOR' && atom.contradictionState !== 'CONTRADICTED'"), 'Floor validity depends on explicit contradiction, not floorCount===0.');
check('Floor and projection sufficiency separated', types.includes('projectionSufficiency') && schema.includes('Projection sufficiency is not geometric Floor'), 'Separate fields/concepts exist.');
check('Custom candidate path disabled', custom.includes('Custom candidate ingestion is disabled') && !custom.includes('candidateText'), 'UI no longer accepts candidate text it cannot populate.');
check('No fake local fallback claim', !server.includes('Falling back to local execution engine') && server.includes('No local fallback is implemented.'), 'Failure handling is explicit.');
check('MARA UI excludes Identity wall', !maraView.includes("key: 'IDENTITY'") && maraView.includes('Five-Domain Evidence Registry'), 'Interactive inspector uses Candidate Core + five domains.');
check('Workflow layer exists', ['workflows/WORKFLOW_SCOUT_DECOMPOSITION.md','workflows/WORKFLOW_MARA_BINDING.md','workflows/WORKFLOW_ARTIFACT_RENDERING.md'].every(exists), 'All three workflow files exist.');

for (const item of checks) console.log(`${item.pass ? 'PASS' : 'FAIL'}  ${item.name} — ${item.details}`);
const failed = checks.filter((item) => !item.pass);
console.log(`\n${checks.length - failed.length}/${checks.length} architecture checks passed.`);
if (failed.length) process.exit(1);
