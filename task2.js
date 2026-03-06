// Task 2
async function fetchUserData() {
  const url = 'https://jsonplaceholder.typicode.com/users/1';
try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        
        const data = await response.json();
        console.log("Task 2 - API Result:", data);
        return data;
    } catch (error) {
        console.error("Task 2 - Error:", error);
    }
}
fetchUserData();
