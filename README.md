# Reproduce async cleanup bug

## steps
- run `npm install`
- run `npm run dev`

## What happens
- you see the app build
- you see the sandbox start
- you see the sandbox running Sandbox startup plugin

```
> dev
> remix dev -c "arc sandbox -e testing"

 💿  remix dev

 info  building...
 info  built (213ms)
sub-process pid: 36929
         App ⌁ remix-architect-app
      Region ⌁ us-west-2
     Profile ⌁ @aws profile / AWS_PROFILE not configured
     Version ⌁ Architect 10.16.3
         cwd ⌁ /Users/courey/dev/subprocess_signal

✓ Sandbox @http (HTTP API mode / Lambda proxy v2.0 format / live reload) routes
    any /* ................................ server

    http://localhost:3333

✓ Sandbox Started in 7ms
❤︎ Local environment ready!

⚬ Sandbox Running 1 Sandbox startup plugin
starting example sandbox plugin
✓ Sandbox Ran Sandbox startup plugin in 1ms
✓ Sandbox File watcher now looking for project changes
^C%
```

## What is Expected

```
$ npm run dev

> dev
> npm-run-all build --parallel "dev:*"


> build
> remix build

 info  building... (NODE_ENV=production)
 info  built (315ms)

> dev:remix
> remix watch


> dev:arc
> cross-env NODE_ENV=development arc sandbox

Watching Remix app in development mode...
💿 Building...
         App ⌁ remix-architect-app
      Region ⌁ us-west-2
     Profile ⌁ @aws profile / AWS_PROFILE not configured
     Version ⌁ Architect 10.13.1
         cwd ⌁ /private/tmp/my-remix-app

✓ Sandbox @http (HTTP API mode / Lambda proxy v2.0 format / live reload) routes
    any /* ................................ server

    http://localhost:3333

✓ Sandbox Started in 9ms
❤︎ Local environment ready!

⚬ Sandbox Running 1 Sandbox startup plugin
starting example sandbox plugin
✓ Sandbox Ran Sandbox startup plugin in 7ms
✓ Sandbox File watcher now looking for project changes
💿 Rebuilt in 441ms
[REMIX DEV] D7AD53A4 ready
^C
⚬ Sandbox Running 1 Sandbox shutdown plugin
stopping example sandbox plugin
This log is after the async logs.
ONE SECOND
TWO SECOND
THREE SECOND
FOUR SECOND
FIVE SECOND
✓ Sandbox Ran Sandbox shutdown plugin in 0ms
^C
```