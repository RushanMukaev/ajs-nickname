import Validator from '../js/app';

test('Никнейм удовлетворяет условиями', () => {
	const username = 'User-116_rus';
	expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
	['user1'],
	['user-'],
	['user_'],
	['1user'],
	['-user'],
	['_user'],
	['us1111er'],
	['us!er'],
	['us.er'],
	['.user'],
	['user.']
])(
	('false'),
	(str) => {
		expect(Validator.validateUsername(str)).toBeFalsy();
	},
);