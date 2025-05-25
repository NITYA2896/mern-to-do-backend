// POST a new task
router.post('/', async (req, res) => {
  const task = new Task({
    text: req.body.text, // <-- change this line
    done: false
  });

  try {
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
