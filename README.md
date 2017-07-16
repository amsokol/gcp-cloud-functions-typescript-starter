# Google Cloud Functions TypeScript starter project

<!-- TOC -->

- [Clone and build project](#clone-and-build-project)
- [Deploy project to Cloud Functions Local Emulator](#deploy-project-to-cloud-functions-local-emulator)

<!-- /TOC -->

## Clone and build project

Clone project from GitHub:

```bash
git clone https://github.com/amsokol/gcp-cloud-functions-typescript-starter.git
```

Go to to project folder:

```bash
cd gcp-cloud-functions-typescript-starter
```

Install required `npm` modules:

```bash
npm install
```

Compile TypeScript Cloud Function:

```bash
tsc
```

File `index.js` is generated and is ready to deploy to **Cloud Functions**

## Deploy project to Cloud Functions Local Emulator

The **Cloud Functions Emulator** is distributed as a standard NPM package, so you can install it with a standard `npm install` command:

```bash
npm install -g @google-cloud/functions-emulator
```

Before you can deploy a function, you need to start the Emulator as follows:

```bash
functions start
```

Deploy an HTTP `helloWorld` function to the **Emulator** as follows:

```bash
npm run deploy-local
```

Open [helloWorld](http://localhost:8010/amsokol-me/us-central1/helloWorld) link in browser to see results.

See [Cloud Functions Local Emulator](https://cloud.google.com/functions/docs/emulator) for more details.
