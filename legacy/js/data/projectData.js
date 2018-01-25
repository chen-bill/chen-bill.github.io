function projectList($scope){
	$scope.projects=[
		{	name: "FANCAR 2.0",
			date: "November 2014 - June 2015",
			info: "Second Place in Wearhacks Toronto 2015 - An Electric powered longboard controlled by a Pebble Smartwatch",
			image: "../media/projects/longboard.png",
			link: "link",
		},

		{	name: "3D Printed",
			date: "September 2014 - Present",
			info: "A variety of 3D-printed projects, ranging from keychain accessories to functional daily use tools",
			image: "../media/projects/3d.png",
			link: "link",
		},

		{	name: "Arduino",
			date: "December 2014 - Present",
			info: "Automating life using arduinos",
			image: "../media/projects/arduino.png",
			link: "link",
		}
	];
}

var skillSelect = [
	{
		id: '#ajarvisContainer',
		toggle: ['html', 'js', 'api','angular', 'node', 'aws', 'cordova', 'pi']
	},
	{
		id: '#alexaKeepContainer',
		toggle: ['html', 'js', 'api','angular', 'node', 'aws']
	},
	{
		id: '#sousChefContainer',
		toggle: ['html', 'js', 'api','angular', 'node', 'aws']
	},
	{
		id: '#cityExplorerContainer',
		toggle: ['html', 'js', 'api','angular']
	},
	{
		id: '#heardditContainer',
		toggle: ['cordova', 'html', 'js', 'api','angular']
	},
	{
		id: '#jarvisContainer',
		toggle: ['arduino', 'bluetooth', 'soldering', 'c', 'java', 'cordova', 'html', 'js', 'api','angular','node', 'multimeter']
	},
	{
		id: '#nomoreeggsContainer',
		toggle: ['js', 'html', 'api', 'node', 'angular']
	},
	{
		id: '#longboardContainer',
		toggle: ['arduino','bluetooth','java', 'soldering','c', 'motor','battery','esc','solidworks','vegas','printer','multimeter','tools', 'edison', 'pebble','machineshop']
	},
	{
		id: '#printedContainer',
		toggle: ['printer', 'solidworks', 'simulations']
	},
	{
		id: '#notorcycleContainer',
		toggle: ['js', 'pebble', 'api', 'photoshop']
	},
	{
		id: '#alarmCockContainer',
		toggle: ['java', 'bluetooth', 'motor', 'esc', 'battery', 'arduino']
	},
	{
		id: '#fartedFromTheBottomContainer',
		toggle: ['js', 'html', 'cordova', 'bluetooth', 'arduino', 'c','angular', 'vegas']
	}
];

var backgroundImageTable = {
    "ajarvisBG": "../media/projects/ajarvis/ajarvis1.png",
    "alexaKeepBG": "../media/projects/alexaKeep.png",
    "sousChefBG": "../media/projects/sousChef.png",
    "cityExplorerBG": "../media/projects/cityExplorer/screen2.png",
    "heardditBG": "../media/projects/hearddit/hearddit.png",
    "jarvisBG": "../media/projects/jarvis/mach1.png",
    "nomoreeggsBG": "../media/projects/noMoreEggs.png",
    "longboardBG": "../media/projects/longboard.png",
    "notorcycleBG": "../media/projects/notorcycle.png",
    "printedBG": "../media/projects/printed/3d.png",
    "alarmCockBG": "../media/projects/alarmCock.png",
    "fartedFromTheBottomBG": "../media/projects/fartedFromTheBottom.png"
};
