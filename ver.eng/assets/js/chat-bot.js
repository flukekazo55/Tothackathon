function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)' || "Tot Fiber" || "tot fiber"))
			return "Hello,Tot Fiber";
		
		if(this.match('I have a problem.') || this.match('i have a problem.'))
			return "What is you Problem?";

		if(this.match('internet disconnect.'))
			return "How long has it been to problem?";
		
		if(this.match('2 hours') || this.match('1 day'))
			return "ok, Your Choose a menu Report Problem from Menu-tab.";
		
		if(this.match('thank you.'))
			return "";
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		
		if(this.input == 'noop')
			return;
		
		return input + " what is your problem?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
