dojo.provide("tests.test_output");


doh.register("tests.output", [

	function testInstantiateOutput() {
		function testme () {
			try {
				var fmt = CSL.Output;
				return "Success";
			} catch (e) {
				return "Instantiation failure: " + e;
			}
		}
		var res = testme();
		doh.assertEqual( "Success", res );
	},

]);
