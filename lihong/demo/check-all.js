function checkAll(form) {
	// /���庯��checkall,����Ϊform
	for ( var i = 0; i < form.elements.length; i++) {
		// /ѭ��,form.elements.length�õ�����Ŀؼ�����
		// /�ѱ����������������e�������
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
		  if (confirm('ȷ��ɾ����ѡ���¼��,ɾ�����޷��ָ�!')) {
			 form.action=actionName+"!delete.do";
		     form.submit();
		  }
	  }
	  else {
	      alert('��ѡ��Ҫɾ���ļ�¼!');
	  }
}