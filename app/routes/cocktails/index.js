import Route from '@ember/routing/route';
// import Ember from 'ember';

export default Route.extend({
// export default Ember.Route.extend({
    model() {
	return this.store.findAll('cocktail');
    },

    actions: {
	deleteCocktail(cocktail) {
	    let confirmation = confirm('Are you sure?');

	    if (confirmation) {
		cocktail.destroyRecord();
	    }
	}
    }
});

