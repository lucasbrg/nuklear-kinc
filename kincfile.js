const project = new Project('Nuklear');

project.addFile('sources/**');
project.addIncludeDir('sources');

resolve(project);
