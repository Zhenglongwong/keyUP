import { rest } from "msw";
import SAMPLEDATA from "./sampleData";

export const handlers = [
	rest.get(
		"https://api.airtable.com/v0/appXStaMbfaTVgA80/Products",
		(req, res, ctx) => {
			return res(ctx.json(SAMPLEDATA));
		}
	),
];
