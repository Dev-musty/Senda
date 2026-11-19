# Senda

A skeleton NestJS project that captures how I structure my backends. Start every new project from this layout, then search for `TODO(template)` to find everything that needs to be replaced.

## Stack

NestJS (ESM) · TypeORM (PostgreSQL) · Redis (ioredis) · class-validator · Swagger · Throttler · NestJS Observe · Vitest · oxlint

## Structure

```
src/
├── main.ts                     # bootstrap: cookies, CORS, filter, pipe, Swagger, DB init
├── app.module.ts               # root module: registers every feature module
├── common/
│   ├── common.module.ts        # ConfigModule (global) + env validation
│   ├── config/                 # config.ts (typed envs) + validate-env.ts
│   ├── decorators/             # @Public() and @CurrentUser()
│   ├── filters/                # global exception filter (consistent error shape)
│   └── redis/                  # global RedisModule (@Inject(REDIS_CLIENT)) + the Redis-backed rate-limit store
├── database/
│   ├── data-source.ts          # shared DataSource + migration runner
│   ├── base.model.ts           # id, createdAt, updatedAt for every model
│   └── migrations/
├── util/
│   ├── abstract-model-action.ts     # generic CRUD base class
│   └── abstract-model-interface.ts  # contract for the base class
└── modules/
    └── <feature>/              # see "Module anatomy"
```

## Module anatomy

Every feature module follows the same shape (see `modules/auth` as the reference):

```
<feature>/
├── <feature>.module.ts
├── <feature>.controller.ts     # routing only, no business logic
├── <feature>.service.ts        # main service: only orchestrates the sub-services, no logic
├── services/                   # sub-services: the actual logic, one job each
├── dtos/                       # request bodies (class-validator + ApiProperty)
├── docs/                       # Swagger decorators, one static method per endpoint
├── models/                     # TypeORM entities, named <Thing>Model
├── model-actions/              # data access; extends AbstractModel<T>
└── enums/                      # optional, created when the feature needs one
```

Data flow: `controller → service → sub-service → model-action → database`. Sub-services never use a `Repository` directly, only model actions.

## Conventions

- Relative imports end in `.js` (ESM).
- Folder names are plural: `dtos`, `models`, `model-actions`, `services`, `enums`.
- Entities are discovered by the glob `modules/**/models/*`.
- Schema changes go through migrations only (`synchronize` is off). Pending migrations run on startup.
- Migration commands run against the compiled build, so they rebuild first:
  `npm run migration:generate -- src/database/migrations/<Name>`, `npm run migration:create -- src/database/migrations/<Name>`, `npm run migration:run`, `npm run migration:revert`.
- Redis is a shared global client: `constructor(@Inject(REDIS_CLIENT) private readonly redis: Redis) {}`. The rate limiter also keeps its counters there.
- Every route needs a valid session by default: a global `AuthGuard` (in `modules/auth/guards/`) denies by default. Mark a route `@Public()` only when it must be open (login, health). Read the user with `@CurrentUser()`.
- New env vars go in three places: `common/config/config.ts`, `common/config/validate-env.ts` and `.env.example`.

## AI skills

`skills/` holds the skills an AI coding agent uses in this project. They know the architecture above, so the agent follows the same layers and conventions you do.

| File | What it is |
|---|---|
| `AGENT.md` | The agent's instructions: architecture, layer rules, code standards, commands, and when to run each skill. Point your tool at it (for example from `CLAUDE.md` or `AGENTS.md` at the project root) |
| `architect.md` | `/architect`: plan a non-trivial feature before coding. Reads the project's own structure and produces a plan that fits it |
| `review.md` | `/review`: after a feature, runs lint, tests and build, then reviews plan, architecture, production readiness and security |
| `security-checklist.skill.md` | `/security-checklist`: seven security gates mapped to this architecture |
| `security-checklist.spec.ts` | The automated part of the checklist. Runs with `npm test` |
| `recover.md` | `/recover`: diagnose what kind of failure it is (bug, polluted session, wrong foundation) before fixing |
| `remember.md` | `/remember save` and `/remember restore`: keep context between sessions in a local `memory.md` (gitignored, never stores secrets) |

In a new project, replace the `TODO(template)` description at the top of `AGENT.md` with one line on what the project does.

### Security checklist spec

`npm test` runs `skills/security-checklist.spec.ts` with the other tests. It scans the code for violations it can detect (auth guards on `:id` routes, validation, rate limits, lockfile and CI, committed secrets, `synchronize`, and more) and lists the checks a person has to do as todo tests. To check any other project:

```bash
SECURITY_TARGET=../other-project npx vitest run skills/security-checklist.spec.ts
```

A project made with `nest-kit new` gets its `package-lock.json` from the install step. Commit it, or the lockfile check and `npm ci` in CI will fail.

## Getting started

```bash
cp .env.example .env     # then fill in the values
docker run -d -p 6379:6379 redis   # local Redis, or point REDIS_URL elsewhere
npm install
npm run start:dev
```

API docs are served at `/api/docs`.

## Adding a feature module

Use the generator (from the `nest-kit` package), which creates the module and registers it in `app.module.ts`:

```bash
nest-kit g module blog-post
```

Then replace the model columns, DTO fields and service methods, and generate a migration for the new model.

`app.module.ts` must keep the `// nest-kit:imports` and `// nest-kit:modules` markers, since the generator inserts above them.
