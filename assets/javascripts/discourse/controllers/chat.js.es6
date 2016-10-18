import Babble from '../lib/babble'

export default Ember.Controller.extend({
  hideTitle: true,

  topic: function() {
    return Babble.get('currentTopic')
  }.property()

})
