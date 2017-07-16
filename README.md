# Google Cloud Functions TypeScript starter project

<!-- TOC -->

- [Clone project](#clone-project)
- [Build project from command-line](#build-project-from-command-line)
- [Deploy project to Cloud Functions Local Emulator from command-line](#deploy-project-to-cloud-functions-local-emulator-from-command-line)

<!-- /TOC -->

## Clone project

Clone project from GitHub:

```bash
git clone https://github.com/amsokol/gcp-cloud-functions-typescript-starter.git
```

Go to to project folder:

```bash
cd gcp-cloud-functions-typescript-starter
```

Optional. You can open project in Visual Studio Code to to build and deploy project from GUI menu:

```bash
code .
```

## Build project from command-line

If you prefer command-line interface instead of Visual Studio Code than use the next commands to build project.

Install required `npm` modules:

```bash
npm install
```

Compile TypeScript Cloud Function:

```bash
tsc
```

File `index.js` is generated and is ready to deploy to **Cloud Functions**

## Deploy project to Cloud Functions Local Emulator from command-line

If you prefer command-line interface instead of Visual Studio Code than use the next commands to deploy project.

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
