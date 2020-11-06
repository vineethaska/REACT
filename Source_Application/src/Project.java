public class Project {
 private String projectName;
 private String projectId;
 
    
 public Project() {
		super();
		this.projectName ="";
		this.projectId = "";
	}
	public Project(String projectName, String projectId) {
	super();
	this.projectName = projectName;
	this.projectId = projectId;
}
	@Override
public String toString() {
	return "Project [projectName=" + projectName + ", projectId=" + projectId + "]";
}
	public String getProjectName() {
	return projectName;
}
public void setProjectName(String projectName) {
	this.projectName = projectName;
}
public String getProjectId() {
	return projectId;
}
public void setProjectId(String projectId) {
	this.projectId = projectId;
}

}