export const mockUsers = {
  123: {
    id: "123",
    name: "Spoorge",
    userPic: "/images/mockSearchResults/users/user1.png",
    type: "user",
    followers: 25000,
    isVerified: true,
  },
  // ...other users
}

export const mockRooms = {
  1: {
    id: "1",
    title: "React Discussion",
    roomPic: "/images/mockSearchResults/rooms/room1.png",
    userPic: "/images/mockSearchResults/users/user1.png",
    owner: "123",
    type: "room",
    viewers: 1300,
    tags: ["React", "JavaScript", "Web Development"],
  },
  // ...other rooms
}

// For search results and listings, export an array version
export const mockSearchResults = Object.values(mockRooms).concat(
  Object.values(mockUsers)
)

export const loggedUser = mockUsers["123"]
