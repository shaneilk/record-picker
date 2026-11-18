import { ThemedText } from '@/components/themed-text';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Button } from '@expo/ui';
import { Image } from 'expo-image';
import { Alert, Platform, StyleSheet, View } from 'react-native';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }



export default function HomeScreen() {
  const handlePress = () => {
    if ( Platform.OS == 'web' ) {
      window.alert("Pressed!")
    } else {
      Alert.alert("Pressed!")
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <View>
        <Image 
          source={require('@/assets/images/recordImages/Innervisions.jpg')}
          style={{width: 250, height: 250}}
          contentFit='contain'
        />
      </View>
      <ThemedText style={{ color: 'black'}}>
          Hello World
      </ThemedText> 
      <Button label='Random LP!' onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
