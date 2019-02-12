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

		if(this.match('ปัญหา') || this.match('ฉันมีปัญหา') || this.match('ผมมีปัญหา') || this.match('ดิฉันมีปัญหา'))
			return "ปัญหาของคุณคืออะไร?";
		
		if(this.match('โย้') || this.match('สวัสดี') || this.match('หวัดดี') || this.match('hi') || this.match('ดีงับ')  || this.match('hello'))
			return "หวัดดี , คุณ TOT Fiber";
		
		if(this.match('อินเตอร์เน็ต') || this.match('อินเตอร์เน็ตมีปัญหา'))
			return "อินเตอร์เน็ตของคุณ อธิบายคำถามเพิ่มได้ไหมครับ?";
		
		if(this.match('อินเตอร์เน็ตไม่สามารถ ใข้ได้') || this.match('เน็ตใข้ไม่ได้') || this.match('อินเตอร์เน็ตใช้ไม่ได้'))
			return "โอ้ , ไม่สามรถใช้งานมากี่วันแล้วครับ";
		
		if(this.match('ตะกี้เลย') || this.match('สักพัก') || this.match('สักพักได้แล้ว'))
			return "อุ๊บ! ไม่นานเลยนี่นา ขอรายละเอียดของคุณลูกค้ามากขึ้นนะ";
		
		if(this.match('thank you') || this.match('ขอบคุณนะ') || this.match('ขอบคุณ') || this.match('ใจมาก'))
			return "ไม่เป็นไรจ้า";
		
		if(this.match('ไปละ') || this.match('หนีดีกว่า') || this.match('บาย') || this.match('ไปดีกว่า'))
			return "ไม่ไปนะ Proma เหงา";
		
		return input + " Proma ไม่มีความรู้เรื่องนี้อ่ะ ???";
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
