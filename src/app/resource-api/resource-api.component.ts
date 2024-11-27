import { Component, resource } from '@angular/core'; // Import necessary Angular modules

@Component({
  selector: 'app-resource-api', // Define the component selector
  template: `
    <div>
      <!-- Display the fetched user data -->
      <h2>User Name: {{ reloadUser() }}</h2>
    </div>
  `, // Component template
})
export class ResourceApiComponent {
  // Define a resource to fetch user data using Angular's resource API
  userResource = resource<any, any>({
    // The loader function is responsible for fetching the user data
    loader: async () => {
      const response = await fetch('https://randomuser.me/api/'); // Fetch data from the random user API
      return response.json(); // Parse and return the JSON data
    },
  });

  // Method to manually reload and display the user data
  reloadUser() {
    // Access the value of the userResource and retrieve the first user in the results array
    const user = this.userResource.value()?.results[0]; 

    // Log the user data to the console for debugging purposes
    console.log('User is ', user); 

    // If user data is available, format and return the name; otherwise, show 'Loading...'
    return user ? `${user.name.title} ${user.name.first} ${user.name.last}` : 'Loading...'; 
  }
}