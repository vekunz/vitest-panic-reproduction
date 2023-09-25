# Vitest panic

This repository is a minimal reproduction repo for an error in Vitest.

Run the tests:

```sh
npm run test
```

You get this error:
```
Error: panic: interface conversion: interface {} is map[string]interface {}, not []uint8

debug.Stack (runtime/debug/stack.go:24)
helpers.PrettyPrintedStack (internal/helpers/stack.go:9)
main.(*serviceType).handleIncomingPacket.func1 (cmd/esbuild/service.go:269)
panic (runtime/panic.go:884)
main.(*serviceType).handleTransformRequest (cmd/esbuild/service.go:980)
main.(*serviceType).handleIncomingPacket (cmd/esbuild/service.go:285)
main.runService.func4 (cmd/esbuild/service.go:192)
created by main.runService (cmd/esbuild/service.go:191)
 ❯ node_modules/esbuild/lib/main.js:801:29
 ❯ responseCallbacks.<computed> node_modules/esbuild/lib/main.js:680:9
 ❯ handleIncomingPacket node_modules/esbuild/lib/main.js:733:9
 ❯ Socket.readFromStdout node_modules/esbuild/lib/main.js:656:7
 ❯ Socket.emit node:events:514:28
```

If you remove `jsdom` as environment from the `vitest.config.js`, the error disappears. If you downgrade Vitest from 0.34.5 to 0.34.2, the error disappears also.
