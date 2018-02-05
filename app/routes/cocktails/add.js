import Route from '@ember/routing/route';

export default Route.extend({
    model() {
	return this.store.createRecord('cocktail');
    },

    actions: {
	addCocktail(cocktail) {
	    let confirmation = confirm('Are you sure?');

	    if (confirmation) {
		cocktail.save();
	    }
	}
    }
});
