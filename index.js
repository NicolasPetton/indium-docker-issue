console.log("started!");

const foo = () => {
	console.log("foo");
	setTimeout(foo, 2000);
};

foo();
