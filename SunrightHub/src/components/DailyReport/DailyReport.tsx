import React, { useState } from "react";

const ShiftReportForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    shiftLead: "",
    promotions: {
      teaQualityCheck: false,
      bobaQualityCheck: false,
      weeklyNotes: "",
    },
    generalNotes: ["", "", "", "", "", ""],
    employeePerformance: {
      anyoneLate: "",
      minutesLate: "",
      notes: ["", "", "", "", ""],
    },
    previousShiftNotes: {
      refillsDone: "",
      previousSupervisor: "",
      notes: ["", ""],
    },
    customerComments: [
      { comment: "", solution: "", isSatisfied: false },
      { comment: "", solution: "", isSatisfied: false },
    ],
    supervisorNotes: "",
  });

  const handleChange = (e, section, index, field) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (index !== undefined && field) {
      setFormData((prev) => {
        const updatedSection = [...prev[section]];
        updatedSection[index][field] = value;
        return { ...prev, [section]: updatedSection };
      });
    } else if (index !== undefined) {
      setFormData((prev) => {
        const updatedArray = [...prev[section]];
        updatedArray[index] = value;
        return { ...prev, [section]: updatedArray };
      });
    } else if (field) {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [section]: value }));
    }
  };

  return (
    <form className="p-4 space-y-4">
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => handleChange(e, "date")}
        />
      </div>

      <div>
        <label>Shift Lead: </label>
        <input
          type="text"
          value={formData.shiftLead}
          onChange={(e) => handleChange(e, "shiftLead")}
        />
      </div>

      <div>
        <h3>Store Operations</h3>
        <label>
          <input
            type="checkbox"
            checked={formData.promotions.teaQualityCheck}
            onChange={(e) =>
              handleChange(e, "promotions", undefined, "teaQualityCheck")
            }
          />
          Tea Quality Check
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.promotions.bobaQualityCheck}
            onChange={(e) =>
              handleChange(e, "promotions", undefined, "bobaQualityCheck")
            }
          />
          Boba Quality Check
        </label>
        <textarea
          placeholder="Weekly leadership notes communicated to team"
          value={formData.promotions.weeklyNotes}
          onChange={(e) =>
            handleChange(e, "promotions", undefined, "weeklyNotes")
          }
        />
      </div>

      <div>
        <h3>General Notes</h3>
        {formData.generalNotes.map((note, index) => (
          <textarea
            key={index}
            value={note}
            placeholder={`Note ${index + 1}`}
            onChange={(e) => handleChange(e, "generalNotes", index)}
          />
        ))}
      </div>

      <div>
        <h3>Employee Performance</h3>
        <label>
          Anyone Late?
          <input
            type="text"
            placeholder="Yes/No"
            value={formData.employeePerformance.anyoneLate}
            onChange={(e) =>
              handleChange(e, "employeePerformance", undefined, "anyoneLate")
            }
          />
        </label>
        <label>
          Minutes Late:
          <input
            type="number"
            value={formData.employeePerformance.minutesLate}
            onChange={(e) =>
              handleChange(e, "employeePerformance", undefined, "minutesLate")
            }
          />
        </label>
        {formData.employeePerformance.notes.map((note, index) => (
          <textarea
            key={index}
            value={note}
            placeholder={`Employee Note ${index + 1}`}
            onChange={(e) => handleChange(e, "employeePerformance", index)}
          />
        ))}
      </div>

      <div>
        <h3>Previous Shift Lead/Soup Comments</h3>
        <label>
          Refills Done?
          <input
            type="text"
            placeholder="Yes/No"
            value={formData.previousShiftNotes.refillsDone}
            onChange={(e) =>
              handleChange(e, "previousShiftNotes", undefined, "refillsDone")
            }
          />
        </label>
        <label>
          Previous Supervisor:
          <input
            type="text"
            value={formData.previousShiftNotes.previousSupervisor}
            onChange={(e) =>
              handleChange(
                e,
                "previousShiftNotes",
                undefined,
                "previousSupervisor"
              )
            }
          />
        </label>
        {formData.previousShiftNotes.notes.map((note, index) => (
          <textarea
            key={index}
            value={note}
            placeholder={`Previous Shift Note ${index + 1}`}
            onChange={(e) => handleChange(e, "previousShiftNotes", index)}
          />
        ))}
      </div>

      <div>
        <h3>Customer Comments</h3>
        {formData.customerComments.map((comment, index) => (
          <div key={index} className="space-y-2">
            <textarea
              value={comment.comment}
              placeholder="Customer Comment"
              onChange={(e) =>
                handleChange(e, "customerComments", index, "comment")
              }
            />
            <textarea
              value={comment.solution}
              placeholder="Solution"
              onChange={(e) =>
                handleChange(e, "customerComments", index, "solution")
              }
            />
            <label>
              Customer Satisfied?
              <input
                type="checkbox"
                checked={comment.isSatisfied}
                onChange={(e) =>
                  handleChange(e, "customerComments", index, "isSatisfied")
                }
              />
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3>Supervisor Notes</h3>
        <textarea
          value={formData.supervisorNotes}
          onChange={(e) => handleChange(e, "supervisorNotes")}
          placeholder="Supervisor Notes"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ShiftReportForm;
