type User = { id: string; name: string };
type Post = { id: string; title: string; content: string };

// Imaginary database
const users: User[] = [];
const posts: Post[] = [];
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
  },
  post: {
    findMany: async () => posts,
    findById: async (id: string) => posts.find((post) => post.id === id),
    create: async (data: { title: string; content: string }) => {
      const post = { id: String(posts.length + 1), ...data };
      posts.push(post);
      return post;
    }
  }
};
