const express = require("express");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const db = require("./configs/connectDB");
const methodsQuery = require("./helpers/methodsQuery");

async function startApolloServer(typeDefs, resolvers) {
	const app = express();
	db.connectDB();
	const httpServer = http.createServer(app);

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => ({ methodsQuery }),
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();
	server.applyMiddleware({ app });

	await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);
