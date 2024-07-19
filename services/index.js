import AsyncStorage from '@react-native-async-storage/async-storage';

export const URL='https://testapi.getlokalapp.com/common/jobs?page=2'

export const AddToBookMarks = async (value) => {
  try {
    // Retrieve the existing bookmarks
    const jsonValue = await AsyncStorage.getItem('bookmarks');
    const bookmarks = jsonValue != null ? JSON.parse(jsonValue) : [];

    // Check if the bookmark with the same id already exists
    const bookmarkExists = bookmarks.some(bookmark => bookmark.id === value.id);

    if (!bookmarkExists) {
      // Add the new value to the bookmarks array
      bookmarks.push(value);

      // Save the updated bookmarks array back to AsyncStorage
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      console.log('Bookmark added successfully!');
    } else {
      console.log('Bookmark already exists!');
    }
  } catch (e) {
    // Handle any errors
    console.error('Failed to add bookmark:', e);
  }
}; 

  export const fetchBookmarks = async () => {
    try {
      // Retrieve the existing bookmarks
      const jsonValue = await AsyncStorage.getItem('bookmarks');
      
      // Parse the JSON string into an array or return an empty array if no bookmarks are found
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // Handle any errors
      console.error('Failed to fetch bookmarks:', e);
      return [];
    }
  };