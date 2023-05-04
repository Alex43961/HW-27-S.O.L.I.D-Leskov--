/*Необходимо, чтобы подклассы могли бы служить заменой для своих суперклассов.

Цель этого принципа заключаются в том, чтобы классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не нарушая работу программы. Если оказывается, что в коде проверяется тип класса, значит принцип подстановки нарушается.
*/

class Person { }

class Member extends Person {
	access() {
		console.log('You have an access.');
	};
}

class Guest extends Person {
	isGuest = true;
}

class Frontend extends Member {
	canCreateFrontend() { };
}

class Backend extends Member {
	canCreateBackend() { };
}

class PersonFromDifferentCompany extends Guest {
	access() {
		throw new Error('You haven\'t access!');
	};
}

function openSecretDoor(member) {
	member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany()); 