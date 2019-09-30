const gfy = (fn) => {
	try {
		let res = fn();
		return { res, err: null } 
	} catch (err) {
		return { res: null, err }
	}
};

export default gfy
