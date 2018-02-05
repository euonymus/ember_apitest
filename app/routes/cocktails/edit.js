import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
	return this.get('store').findRecord('cocktail', params.id);
    },

    actions: {
	saveCocktail(cocktail) {
	    let confirmation = confirm('Are you sure?');

	    if (confirmation) {
		cocktail.save();
	    }
	}
    }
});
