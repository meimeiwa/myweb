function checkAll(form) {
	// /定义函数checkall,参数为form
	for ( var i = 0; i < form.elements.length; i++) {
		// /循环,form.elements.length得到表单里的控件个数
		// /把表单里的内容依依付给e这个变量
		var e = form.elements[i];
		if (e.name != 'chkall')
			e.checked = form.chkall.checked;
	}
}

function selectAny(form) {
	for ( var i = 0; i < form.elements.length; i++) {
		var e = form.elements[i];
		if (e.name != 'chkall' && e.checked){
			return true;
		}
	}
	return false;
}

function doDelete(form, actionName){
	  if(selectAny(form)) {
		  if (confirm('确认删除所选择记录吗,删除后无法恢复!')) {
			 form.action=actionName+"!delete.do";
		     form.submit();
		  }
	  }
	  else {
	      alert('请选择要删除的记录!');
	  }
}