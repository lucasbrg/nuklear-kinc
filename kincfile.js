const project = new Project('Nuklear');

project.addFile('sources/**');
project.addFile('shaders/**');
project.addIncludeDir('sources');
project.setDebugDir('Deployment');
project.flatten();

resolve(project);
