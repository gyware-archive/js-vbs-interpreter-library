import System;
import System.IO;
import System.Reflection;
import System.Security;
import System.ComponentModel;
import System.Collections.Generic;
import System.Collections.ObjectModel;
import System.EnterpriseServices;
import System.Runtime.InteropServices;

//[assembly: ComVisible(true)]
//[assembly: ProgId("GyWare.JScript.NET")]
[assembly: Guid("36b8dbcb-3e3a-45ff-9d8a-0d005d1279ec")]
public class JScriptNET extends ServicedComponent {
    public function EvalCode(code) {
		return eval(code);
    }
}
