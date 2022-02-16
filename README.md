1. Make sure your app is in the background and run this command:

with app
```
adb shell am start -W -a android.intent.action.VIEW -d app://demodeeplinks com.demodeeplinks
```

with https
```
adb shell am start -W -a android.intent.action.VIEW -d https://www.demodeeplinks.com com.demodeeplinks
```