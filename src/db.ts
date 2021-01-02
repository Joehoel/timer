import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
	await db.session.create({
		data: {
			time: 1600,
		},
	});

	const sessions = await db.session.findMany();
	console.log(sessions);
}

main().catch(console.log);

export default db;
