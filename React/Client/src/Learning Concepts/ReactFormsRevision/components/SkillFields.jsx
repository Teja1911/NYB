function SkillFields({ skills, onSkillsChange }) {

    const handleSkillChange = (index, value) => {

        const updatedSkills = [...skills];

        updatedSkills[index] = value;

        onSkillsChange(updatedSkills);
    };

    const addSkill = () => {

        onSkillsChange([
            ...skills,
            "",
        ]);
    };

    const removeSkill = (index) => {

        const updatedSkills = skills.filter(
            (_, skillIndex) => skillIndex !== index
        );

        onSkillsChange(updatedSkills);
    };

    return (
        <div className="skills-section">

            <h3>Skills</h3>

            {skills.map((skill, index) => (

                <div
                    className="skill-field"
                    key={index}
                >

                    <input
                        type="text"
                        value={skill}
                        onChange={(event) =>
                            handleSkillChange(
                                index,
                                event.target.value
                            )
                        }
                        placeholder={`Enter skill ${index + 1}`}
                    />

                    {skills.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeSkill(index)}
                        >
                            Remove
                        </button>
                    )}

                </div>

            ))}

            <button
                type="button"
                onClick={addSkill}
            >
                + Add Skill
            </button>

        </div>
    );
}

export default SkillFields;