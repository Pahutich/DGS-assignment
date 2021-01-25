//using objects pool when we want to spawn objects fast and there is a lot of them to spawn (for example a lot of particles, bullets, etc).
//Spawning them with 'new' keyword in many programming languages or with Instantiate() method in Unity takes a lot of time and resources.
//Here comes our pattern. The principle is that we create a "queue" of a certain size, there we store our objects of the same type we want 
//to spawn. When it is a time to spawn an object, it just leaves the queue and just goes back to pool or to other place in space when it has done 
//its job. However, I personally struggled a lot while trying to implement it in typescript due to either lack of proficiency
//in ts or just irrelevance of using this pattern in typescript. But I must say if I had such task but in Unity and using C#, I wouldn't
//many problems with implementing this pattern. I hope that understanding pattern in general and more broad explanation will compensate
//abscence of its implementation.