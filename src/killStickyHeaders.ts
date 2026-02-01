// find & delete all fixed/sticky position elements of body

Array.from(document.querySelectorAll('body *'))
	.filter(el => ['fixed', 'sticky'].includes(getComputedStyle(el).position))
	.forEach(el => el.remove());
