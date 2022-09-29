import { db } from './db';
import { success, error } from './result';

export default {
	async all() {
		return await db.player.findMany();
	},

	async create(data) {
		const errors = this.validate(data);
		if (Object.keys(errors).length) return error(errors);

		const result = await db.player.create({ data });

		return success(result);
	},

	validate(data) {
		const errors = {};

		if (!data.name) {
			errors['name'] = { required: true };
		}

		if (!data.position) {
			errors['position'] = { required: true };
		}

		return errors;
	}
};
