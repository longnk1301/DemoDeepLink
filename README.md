1. Make sure your app is in the background and run this command:

```
adb shell am start -W -a android.intent.action.VIEW -d app://deeplink com.demodeeplinks
```