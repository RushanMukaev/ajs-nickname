export default class Validator {
	static validateUsername(name) {
		return /^[a-zA-Z]+(\w|\d|-|_)+[a-zA-Z]$/.test(name) && !/\d{4,}/.test(name);
	}
}
  
  