Copy ToggleSoftKeys folder to 
Android -> app -> src -> main -> java -> com -> name_of_your_project*

Don't forget to change import paths of your module in ToggleSoftKeysModule and ToggleSoftKeysPackage  files

Import module to MainApplication.java file with
    import com.name_of_your_project.ToggleSoftKeys.ToggleSoftKeysPackage;
    add package to package list

`   protected List getPackages() {
         return Arrays.asList(
            ... ,
            new ToggleSoftKeysPackage()
        );
      }
`
1. Start the react-native server with npm start command
2. Build for android with react-native run-android
3. Add module with import { NativeModules } from 'react-native'
4. const { hide, show } =  NativeModules.ToggleSoftKeys;
Use this callbacks to hide/show  android softkeys

Issues: 

Build tested, if something went wrong try to clean android build or invalidate cache and restart Android studio or look through example

Feel free to ask any questions.

MIT
