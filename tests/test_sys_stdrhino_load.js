dojo.provide("tests.test_sys_stdrhino_load");

dojo.require("csl.testing_stdrhino");

doh.register("tests.sys_stdrhino_load", [

	function testInstantiationTestEmpty() {
		function testme () {
			try {
				var obj = new StdRhinoTest();
				return "Success";
			} catch (e) {
				return e;
			}
		}
		var res = testme();
		doh.assertEqual( "Success", res );
	},

	function testInstantiationTestLoad() {
		function testme () {
			try {
				var obj = new StdRhinoTest("name_WesternSimple");
				return "Success";
			} catch (e) {
				return e;
			}
		}
		var res = testme();
		doh.assertEqual( "Success", res );
	},

]);
