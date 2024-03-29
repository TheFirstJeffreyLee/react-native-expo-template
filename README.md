## Get Started

<details>
  <summary>Expand</summary>
  
  1. Make sure you meet these requirements https://docs.expo.dev/get-started/installation/
  2. Make sure you run `npm install -g expo-cli` to get the latest version
  2. `yarn`
  3. `yarn start`
  4. A prompt should show up to let you know how to start web, ios or android. However if this is your first time using expo you may need to open up the iOS simulator or android emulator first. i.e. `open -a Simulator && yarn start`
</details>

## New Project Setup

<details>
  <summary>app.json</summary>

1. Update the `scheme` value to have the actual name of the app. It is basically the URL scheme to link into your app. For example, if we set this to `demo`, then `demo://` URLs would open your app when tapped.
2. Update the `icon` to get the proper icon for the app aka what the user sees on their home screen
3. Update the `splash.image` to get the proper splash screen you want on startup
4. Update the `android.adaptiveIcon.foregroundImage` to specify your foreground image

</details>

## Prettier

1. Prettier configs already exist, will want to install something like this VSCode extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Explanation Packages

I just wanted to explain why installed some of these extra packages on top of repo for this template

<details>
  <summary>Expand list</summary>

  <details>
    <summary>lodash</summary>
    
    Just a lot of useful syntatical sugar util functions
  </details>

  <details>
    <summary>eslint</summary>
    
    Prerequisite dependency for eslint-config-airbnb but mainly because I wanted linting
  </details>

  <details>
    <summary>eslint-config-airbnb</summary>
    
    A good starting point for linting rules
  </details>

  <details>
    <summary>eslint-plugin-import</summary>
    
    Prerequisite dependency for eslint-config-airbnb
  </details>

  <details>
    <summary>eslint-plugin-react</summary>
    
    Prerequisite dependency for eslint-config-airbnb
  </details>

  <details>
    <summary>eslint-plugin-react-hooks</summary>
    
    Prerequisite dependency for eslint-config-airbnb
  </details>

  <details>
    <summary>eslint-plugin-jsx-a11y</summary>
    
    Prerequisite dependency for eslint-config-airbnb
  </details>

  <details>
    <summary>eslint-plugin-react-native</summary>
    
    Specific linting rules for react native
  </details>

  <details>
    <summary>eslint-plugin-jest</summary>
    
    Specific linting rules for jest
  </details>

  <details>
    <summary>prettier</summary>
    
    To automatically pretty up the code base
  </details>

  <details>
    <summary>eslint-plugin-prettier</summary>
    
    Runs prettier as eslint
  </details>

  <details>
    <summary>eslint-config-prettier</summary>
    
    Dependency for eslint-plugin-prettier
  </details>

  <details>
    <summary>eslint-import-resolver-babel-module</summary>
    
    For absolute pathing. A `babel-plugin-module-resolver` for `eslint-plugin-import`
  </details>

  <details>
    <summary>@typescript-eslint/parser</summary>
    
    Facilitates use of eslint with typescript
  </details>

  <details>
    <summary>@typescript-eslint/eslint-plugin</summary>
    
    Adds or extends rules with typescript specific features
  </details>
</details>
