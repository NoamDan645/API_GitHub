
String checkNotNullAndReturn(String val, DataRow dr){

if(dr[val] != DBNull.Value && dr[val] != null){
return dr[val].ToString();
}
return null; 
}