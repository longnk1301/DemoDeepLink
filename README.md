1. Make sure your app is in the background and run this command:

with app
```
adb shell am start -W -a android.intent.action.VIEW -d app://demodeeplinks com.demodeeplinks
```

with https
```
adb shell am start -W -a android.intent.action.VIEW -d https://www.demodeeplinks.com com.demodeeplinks
```

2. We can using uri-scheme to open URL:
  ```
  npx uri-scheme open app://demodeeplinks [--android, --ios]
  ```

3. using dynamic link
  - create project in console firebase
  - I already create dynamic link and let's copy this link https://demodeeplinks.page.link/Tbeh to message app or anywhere in your device and click it to open app with package name is `com.demodeeplinks`
  