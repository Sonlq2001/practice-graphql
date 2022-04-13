const express = require("express");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const dotenv = require("dotenv");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const db = require("./configs/connectDB");
const methodsQuery = require("./helpers/methodsQuery");

async function startApolloServer(typeDefs, resolvers) {
	const app = express();
	db.connectDB();
	dotenv.config();
	const httpServer = http.createServer(app);

	const port = process.env.PORT || 4000;

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => ({ methodsQuery }),
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();
	server.applyMiddleware({ app });

	await new Promise((resolve) => httpServer.listen(port, resolve));
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);
