const length = 100;
let items = [];
let i = 1;

function setup() {
	createCanvas(600, 400);
	randomizeItems(length);
	frameRate(10);
}

async function draw() {
	background(200);
	displayItems();
	if (i < items.length) {
		let j = i;
		while (j > 0 && items[j - 1] > items[j]) {
			swap(items, j, j - 1);
			j--;
		}
		i++;
	}
}

const randomizeItems = n => {
	for (let i = 0; i < n; i++) {
		const r = random();
		items.push(r);
	}
};

const displayItems = () => {
	fill(0);
	stroke(255);
	const w = width / length;
	for (let i = 0; i < length; i++) {
		const h = map(items[i], 0, 1, 0, height);
		rect(i * w, height - h, w, h);
	}
};

const swap = (l, i1, i2) => {
	const temp = l[i1];
	l[i1] = l[i2];
	l[i2] = temp;
};
