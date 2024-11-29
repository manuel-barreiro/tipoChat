const database = {
  users: [
    // Benjamín Brusa (Existing)
    {
      id: "1",
      fullName: "Benjamín Brusa",
      nickName: "Kakaroto xD",
      email: "benja.brusa@gmail.com",
      phone: "123-456-7890",
      dateOfBirth: new Date("1990-01-01"),
      bio: "Professional streamer and content creator",
      gender: "male",
      profilePicUrl: "/images/users/benja.png",
      isVerified: true,
      data: {
        followers: 3500,
        following: 2500,
        points: 333,
        subscriptionPrice: 10,
        subscribers: 23,
        subscriptions: 18,
      },
      links: [
        { id: 1, title: "Facebook", url: "https://facebook.com/benja" },
        { id: 2, title: "Twitter", url: "https://twitter.com/benja" },
        { id: 3, title: "Instagram", url: "https://instagram.com/benja" },
        { id: 4, title: "LinkedIn", url: "https://linkedin.com/in/benja" },
        { id: 5, title: "GitHub", url: "https://github.com/benja" },
        { id: 6, title: "Reddit", url: "https://reddit.com/u/benja" },
      ],
    },
    // Sarah Connor
    {
      id: "2",
      fullName: "Sarah Connor",
      nickName: "Terminator",
      email: "sarah.connor@skynet.com",
      phone: "987-654-3210",
      dateOfBirth: new Date("1985-05-15"),
      bio: "Fighting machines from the future",
      gender: "female",
      profilePicUrl: "/images/users/sarah.png",
      isVerified: true,
      data: {
        followers: 15000,
        following: 1200,
        points: 890,
        subscriptionPrice: 15,
        subscribers: 156,
        subscriptions: 5,
      },
      links: [
        { id: 1, title: "Instagram", url: "https://instagram.com/sarah" },
        { id: 2, title: "YouTube", url: "https://youtube.com/sarah" },
      ],
    },
    // Tony Stark
    {
      id: "3",
      fullName: "Tony Stark",
      nickName: "IronMan",
      email: "tony@starkindustries.com",
      phone: "555-123-4567",
      dateOfBirth: new Date("1980-08-23"),
      bio: "Genius, billionaire, playboy, philanthropist",
      gender: "male",
      profilePicUrl: "/images/users/tony.png",
      isVerified: true,
      data: {
        followers: 25000,
        following: 500,
        points: 1500,
        subscriptionPrice: 25,
        subscribers: 450,
        subscriptions: 10,
      },
      links: [
        { id: 1, title: "LinkedIn", url: "https://linkedin.com/in/tonystark" },
        { id: 2, title: "Twitter", url: "https://twitter.com/ironman" },
      ],
    },
    // Bruce Wayne
    {
      id: "4",
      fullName: "Bruce Wayne",
      nickName: "Batman",
      email: "bruce@wayneenterprises.com",
      phone: "555-999-8888",
      dateOfBirth: new Date("1982-02-19"),
      bio: "Gotham's watchful protector",
      gender: "male",
      profilePicUrl: "/images/users/bruce.png",
      isVerified: true,
      data: {
        followers: 18000,
        following: 200,
        points: 2500,
        subscriptionPrice: 30,
        subscribers: 890,
        subscriptions: 3,
      },
      links: [
        { id: 1, title: "Website", url: "https://wayne.com" },
        { id: 2, title: "Instagram", url: "https://instagram.com/brucewayne" },
      ],
    },
    // Peter Parker
    {
      id: "5",
      fullName: "Peter Parker",
      nickName: "Spidey",
      email: "peter@dailybugle.com",
      phone: "555-777-6666",
      dateOfBirth: new Date("1995-08-10"),
      bio: "Your friendly neighborhood photographer",
      gender: "male",
      profilePicUrl: "/images/users/peter.png",
      isVerified: false,
      data: {
        followers: 8500,
        following: 920,
        points: 450,
        subscriptionPrice: 8,
        subscribers: 120,
        subscriptions: 15,
      },
      links: [
        { id: 1, title: "Portfolio", url: "https://peterfotos.com" },
        { id: 2, title: "Twitter", url: "https://twitter.com/spideyfriend" },
      ],
    },
    // Diana Prince
    {
      id: "6",
      fullName: "Diana Prince",
      nickName: "WonderWoman",
      email: "diana@themyscira.com",
      phone: "555-444-3333",
      dateOfBirth: new Date("1988-03-22"),
      bio: "Ambassador of peace and justice",
      gender: "female",
      profilePicUrl: "/images/users/diana.png",
      isVerified: true,
      data: {
        followers: 32000,
        following: 150,
        points: 3300,
        subscriptionPrice: 20,
        subscribers: 980,
        subscriptions: 7,
      },
      links: [
        { id: 1, title: "Blog", url: "https://dianasblog.com" },
        { id: 2, title: "YouTube", url: "https://youtube.com/wonderwoman" },
      ],
    },
    {
      id: "7",
      fullName: "Stephen Strange",
      nickName: "DrStrange",
      email: "strange@sanctum.com",
      phone: "555-222-1111",
      dateOfBirth: new Date("1978-11-18"),
      bio: "Master of the Mystic Arts.",
      gender: "male",
      profilePicUrl: "/images/users/stephen.png",
      isVerified: true,
      data: {
        followers: 12000,
        following: 400,
        points: 1800,
        subscriptionPrice: 18,
        subscribers: 560,
        subscriptions: 12,
      },
      links: [
        { id: 1, title: "Research", url: "https://www.mysticalstudies.com" },
        { id: 2, title: "LinkedIn", url: "https://www.linkedin.com" },
      ],
    },
  ],

  rooms: [
    // Benjamín's Rooms (user 1)
    {
      id: "1",
      title: "Gaming Stream",
      description: "Join me for some epic gaming!",
      privacy: "Public",
      owner: "1",
      viewers: 1523,
      tags: ["Gaming", "Entertainment"],
      roomPic: "/images/rooms/room1.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "2",
      title: "Dev Talk",
      description: "Coding and tech discussions",
      privacy: "Private",
      owner: "1",
      viewers: 856,
      tags: ["Programming", "Technology"],
      roomPic: "/images/rooms/room2.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "3",
      title: "Anime Chat",
      description: "Discussing latest anime releases",
      privacy: "Public",
      owner: "1",
      viewers: 2341,
      tags: ["Anime", "Entertainment"],
      roomPic: "/images/rooms/room3.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    // Sarah's Rooms (user 2)
    {
      id: "4",
      title: "Survival Training",
      description: "Essential survival skills and tips",
      privacy: "Private",
      owner: "2",
      viewers: 945,
      tags: ["Training", "Survival"],
      roomPic: "/images/rooms/room4.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "5",
      title: "Tech Defense",
      description: "Cybersecurity fundamentals",
      privacy: "Public",
      owner: "2",
      viewers: 1232,
      tags: ["Security", "Technology"],
      roomPic: "/images/rooms/room5.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "6",
      title: "Weapons Training",
      description: "Advanced self-defense techniques",
      privacy: "Private",
      owner: "2",
      viewers: 567,
      tags: ["Defense", "Training"],
      roomPic: "/images/rooms/room1.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    // Tony's Rooms (user 3)
    {
      id: "7",
      title: "Tech Innovation",
      description: "Latest in AI and robotics",
      privacy: "Public",
      owner: "3",
      viewers: 4521,
      tags: ["Technology", "Innovation"],
      roomPic: "/images/rooms/room2.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "8",
      title: "Stark Labs",
      description: "Behind the scenes at Stark Industries",
      privacy: "Private",
      owner: "3",
      viewers: 2134,
      tags: ["Technology", "Business"],
      roomPic: "/images/rooms/room3.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "9",
      title: "Engineering 101",
      description: "Basic engineering principles",
      privacy: "Public",
      owner: "3",
      viewers: 1876,
      tags: ["Education", "Engineering"],
      roomPic: "/images/rooms/room4.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    // Bruce's Rooms (user 4)
    {
      id: "10",
      title: "Night Watch",
      description: "Exploring Gotham after dark",
      privacy: "Private",
      owner: "4",
      viewers: 3421,
      tags: ["Urban", "Night"],
      roomPic: "/images/rooms/room5.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "11",
      title: "Detective Work",
      description: "Crime scene investigation techniques",
      privacy: "Public",
      owner: "4",
      viewers: 1543,
      tags: ["Crime", "Education"],
      roomPic: "/images/rooms/room1.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "12",
      title: "Martial Arts",
      description: "Advanced combat training",
      privacy: "Private",
      owner: "4",
      viewers: 876,
      tags: ["Sports", "Training"],
      roomPic: "/images/rooms/room2.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    // Peter's Rooms (user 5)
    {
      id: "13",
      title: "NYC Photography",
      description: "Best spots for urban photography",
      privacy: "Public",
      owner: "5",
      viewers: 945,
      tags: ["Photography", "Art"],
      roomPic: "/images/rooms/room3.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "14",
      title: "Science Hour",
      description: "High school science tutoring",
      privacy: "Public",
      owner: "5",
      viewers: 634,
      tags: ["Education", "Science"],
      roomPic: "/images/rooms/room4.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "15",
      title: "Daily Bugle News",
      description: "Latest city news and updates",
      privacy: "Public",
      owner: "5",
      viewers: 1232,
      tags: ["News", "Local"],
      roomPic: "/images/rooms/room5.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    // Diana's Rooms (user 6)
    {
      id: "16",
      title: "Ancient History",
      description: "Exploring ancient civilizations",
      privacy: "Public",
      owner: "6",
      viewers: 2341,
      tags: ["History", "Education"],
      roomPic: "/images/rooms/room1.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "17",
      title: "Women Empowerment",
      description: "Leadership and empowerment talks",
      privacy: "Public",
      owner: "6",
      viewers: 3456,
      tags: ["Education", "Society"],
      roomPic: "/images/rooms/room2.png",
      isLive: false,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
    {
      id: "18",
      title: "Combat Training",
      description: "Amazon warrior training techniques",
      privacy: "Private",
      owner: "6",
      viewers: 1789,
      tags: ["Sports", "Training"],
      roomPic: "/images/rooms/room3.png",
      isLive: true,
      startTime: new Date(),
      actions: { embed: true, share: true, edit: true, delete: true },
    },
  ],

  posts: [
    // Gaming Stream (Room 1) posts
    {
      id: "1",
      roomId: "1",
      title: "New Gaming Setup!",
      content:
        "Check out my latest streaming equipment - RTX 4090 + 4K monitors",
      author: "1",
      createdAt: new Date("2024-03-15"),
      likes: 234,
      comments: 45,
      image: "/images/mockRoom.png",
    },
    {
      id: "2",
      roomId: "1",
      title: "Game Night Schedule",
      content: "Join us every Friday for multiplayer mayhem!",
      author: "5",
      createdAt: new Date("2024-03-14"),
      likes: 156,
      comments: 23,
      image: "/images/mockRoom.png",
    },

    // Dev Talk (Room 2) posts
    {
      id: "3",
      roomId: "2",
      title: "React vs Vue in 2024",
      content: "Comparing modern frontend frameworks performance",
      author: "1",
      createdAt: new Date("2024-03-13"),
      likes: 567,
      comments: 89,
      image: "/images/mockRoom.png",
    },
    {
      id: "4",
      roomId: "2",
      title: "Clean Code Tips",
      content: "Essential practices for maintainable code",
      author: "3",
      createdAt: new Date("2024-03-12"),
      likes: 345,
      comments: 56,
      image: "/images/mockRoom.png",
    },

    // Survival Training (Room 4) posts
    {
      id: "5",
      roomId: "4",
      title: "Emergency Kit Essentials",
      content: "Must-have items for your survival pack",
      author: "2",
      createdAt: new Date("2024-03-11"),
      likes: 789,
      comments: 123,
      image: "/images/mockRoom.png",
    },
    {
      id: "6",
      roomId: "4",
      title: "Basic First Aid",
      content: "Life-saving techniques everyone should know",
      author: "4",
      createdAt: new Date("2024-03-10"),
      likes: 432,
      comments: 67,
      image: "/images/mockRoom.png",
    },

    // Tech Innovation (Room 7) posts
    {
      id: "7",
      roomId: "7",
      title: "AI Breakthrough",
      content: "Latest developments in neural networks",
      author: "3",
      createdAt: new Date("2024-03-09"),
      likes: 901,
      comments: 145,
      image: "/images/mockRoom.png",
    },
    {
      id: "8",
      roomId: "7",
      title: "Future of Robotics",
      content: "Integrating AI with mechanical engineering",
      author: "1",
      createdAt: new Date("2024-03-08"),
      likes: 678,
      comments: 98,
      image: "/images/mockRoom.png",
    },

    // Night Watch (Room 10) posts
    {
      id: "9",
      roomId: "10",
      title: "Gotham by Night",
      content: "Photo essay of city's nocturnal beauty",
      author: "4",
      createdAt: new Date("2024-03-07"),
      likes: 543,
      comments: 76,
      image: "/images/mockRoom.png",
    },
    {
      id: "10",
      roomId: "10",
      title: "Urban Safety Tips",
      content: "Staying secure in the city after dark",
      author: "2",
      createdAt: new Date("2024-03-06"),
      likes: 321,
      comments: 45,
      image: "/images/mockRoom.png",
    },

    // NYC Photography (Room 13) posts
    {
      id: "11",
      roomId: "13",
      title: "Best Photo Spots",
      content: "Hidden gems for urban photography",
      author: "5",
      createdAt: new Date("2024-03-05"),
      likes: 432,
      comments: 65,
      image: "/images/mockRoom.png",
    },
    {
      id: "12",
      roomId: "13",
      title: "Camera Settings Guide",
      content: "Perfect settings for city photography",
      author: "1",
      createdAt: new Date("2024-03-04"),
      likes: 234,
      comments: 43,
      image: "/images/mockRoom.png",
    },

    // Ancient History (Room 16) posts
    {
      id: "13",
      roomId: "16",
      title: "Lost Civilizations",
      content: "Discovering ancient wonders",
      author: "6",
      createdAt: new Date("2024-03-03"),
      likes: 876,
      comments: 134,
      image: "/images/mockRoom.png",
    },
    {
      id: "14",
      roomId: "16",
      title: "Mythology Origins",
      content: "Common threads in ancient stories",
      author: "3",
      createdAt: new Date("2024-03-02"),
      likes: 654,
      comments: 87,
      image: "/images/mockRoom.png",
    },
  ],
}

// Helper functions
export const findUserById = (id) => {
  return database.users.find((user) => user.id === id)
}

export const findRoomById = (id) => {
  return database.rooms.find((room) => room.id === id)
}

export const findRoomsByUserId = (userId) => {
  return database.rooms.filter((room) => room.owner === userId)
}

export const findPostsByUserId = (userId) => {
  return database.posts.filter((post) => post.author === userId)
}

export const findPostsByRoomId = (roomId) => {
  return database.posts.filter((post) => post.roomId === roomId)
}

export const findPostById = (id) => {
  return database.posts.find((post) => post.id === id)
}

export const searchUsers = (query) => {
  return database.users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase()) ||
      user.nickName.toLowerCase().includes(query.toLowerCase())
  )
}

export const searchRooms = (query) => {
  return database.rooms.filter(
    (room) =>
      room.title.toLowerCase().includes(query.toLowerCase()) ||
      room.description.toLowerCase().includes(query.toLowerCase())
  )
}

export const getLiveRooms = () => {
  return database.rooms.filter((room) => room.isLive)
}

// Export mock data
export const mockData = database
