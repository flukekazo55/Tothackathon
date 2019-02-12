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
		
		if(this.match('อินเตอร์เน็ตไม่สามารถใข้ได้') || this.match('เน็ตใช้ไม่ได้') || this.match('อินเตอร์เน็ตใช้ไม่ได้'))
			return "โอ้ , ไม่สามรถใช้งานมากี่วันแล้วครับ";
		
		if(this.match('ตะกี้เลย') || this.match('สักพัก') || this.match('สักพักได้แล้ว') || this.match('เมื่อกี้') || this.match('นาที'))
			return "อุ๊บ! ไม่นานเลยนี่นา ขอรายละเอียดของคุณลูกค้ามากขึ้นนะ";

		if(this.match('อยู่ดีๆ เกมส์ก็หลุด'))
			return "ถ้าไฟที่เร้าเตอร์ของลูกค้าขึ้นครบทุกช่อง อาจจะเป็นปัญหาที่ตัวสัญญาณขัดข้อง รบกวนลูกค้าลองใช้อินเตอร์เน็ตใหม่อีกทีนะคะ";  
		
		if(this.match('thank you') || this.match('ขอบคุณนะ') || this.match('ขอบคุณ') || this.match('ใจมาก'))
			return "ไม่เป็นไรจ้า";

		if(this.match('นาย') || this.match('นาง') || this.match('นางสาว'))
			return "ขอบคุณสำหรับข้อมูลจ้า ผู้ใช้จะกรอกข้อมูลปัญหาเอง หรือจะให้ Proma กรอกให้คะ";

		if(this.match('กรอกเอง') || this.match('เด๋วกรอกเอง') || this.match('เดี่ยวกรอกเอง'))
			return "งั้นลูกค้าสามารถเลือกเมนู \"แจ้งปัญหา\" ทางด้านซ้ายได้เลยนะคะ";

		if(this.match('กรอกให้หน่อย'))
			return "รบกวนผู้ใช้บอกปัญหาอีกรอบนะคะ";  

		if(this.match('บลาๆ'))
			return "Proma ได้รับข้อมูลแล้ว เดี๋ยวจะมาบอกคิวนะคะ";  
		
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
