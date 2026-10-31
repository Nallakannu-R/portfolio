import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, Pencil, Plus, Trash2, X } from 'lucide-react'

const emptyEntry = {
  date: '',
  category: '',
  title: '',
  description: '',
}

function TimelineForm({ entry, onCancel, onSave }) {
  const [form, setForm] = useState(entry ?? emptyEntry)

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function submitForm(event) {
    event.preventDefault()
    onSave({
      ...form,
      id: entry?.id ?? `milestone-${Date.now()}`,
      placeholder: false,
    })
  }

  return (
    <form className="timeline-form" onSubmit={submitForm}>
      <div className="timeline-form-heading">
        <div>
          <span className="eyebrow">EDIT YOUR JOURNEY</span>
          <h3>{entry ? 'Update milestone' : 'Add a milestone'}</h3>
        </div>
        <button className="icon-button" type="button" onClick={onCancel} aria-label="Close editor">
          <X size={18} />
        </button>
      </div>
      <label>
        Date or period
        <input
          name="date"
          value={form.date}
          onChange={updateField}
          placeholder="e.g. 2024 — 2025"
          required
        />
      </label>
      <label>
        Category
        <input
          name="category"
          value={form.category}
          onChange={updateField}
          placeholder="e.g. Volunteering"
          required
        />
      </label>
      <label>
        Title
        <input
          name="title"
          value={form.title}
          onChange={updateField}
          placeholder="What happened?"
          required
        />
      </label>
      <label>
        Details
        <textarea
          name="description"
          value={form.description}
          onChange={updateField}
          placeholder="Add a short, factual description."
          rows="3"
          required
        />
      </label>
      <div className="timeline-form-actions">
        <button className="button button-muted" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="button button-primary" type="submit">
          Save milestone
        </button>
      </div>
    </form>
  )
}

export default function Timeline({ entries, onChange }) {
  const [editingId, setEditingId] = useState(null)
  const [adding, setAdding] = useState(false)
  const reducedMotion = useReducedMotion()
  const formEntry = entries.find((entry) => entry.id === editingId)

  function saveEntry(entry) {
    onChange(
      entries.some((item) => item.id === entry.id)
        ? entries.map((item) => (item.id === entry.id ? entry : item))
        : [...entries, entry],
    )
    setEditingId(null)
    setAdding(false)
  }

  function deleteEntry(id) {
    onChange(entries.filter((entry) => entry.id !== id))
  }

  return (
    <div className="timeline-layout">
      <div className="timeline-list">
        {entries.map((entry, index) => (
          <motion.article
            className={`timeline-item${entry.placeholder ? ' timeline-item-placeholder' : ''}`}
            key={entry.id}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reducedMotion ? 0 : 0.42, delay: reducedMotion ? 0 : index * 0.05 }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="timeline-date">
                  <CalendarDays size={13} />
                  {entry.date}
                </span>
                <span className="timeline-category">{entry.category}</span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <div className="timeline-actions">
                <button
                  type="button"
                  className="text-button"
                  onClick={() => {
                    setAdding(false)
                    setEditingId(entry.id)
                  }}
                  aria-label={`Edit ${entry.title}`}
                >
                  <Pencil size={13} /> Edit
                </button>
                <button
                  type="button"
                  className="text-button text-button-danger"
                  onClick={() => deleteEntry(entry.id)}
                  aria-label={`Delete ${entry.title}`}
                >
                  <Trash2 size={13} /> Remove
                </button>
              </div>
            </div>
          </motion.article>
        ))}
        <button
          type="button"
          className="timeline-add"
          onClick={() => {
            setEditingId(null)
            setAdding(true)
          }}
        >
          <span className="timeline-add-icon">
            <Plus size={16} />
          </span>
          Add a milestone
        </button>
      </div>
      {(adding || formEntry) && (
        <TimelineForm
          key={formEntry?.id ?? 'new-entry'}
          entry={formEntry}
          onCancel={() => {
            setAdding(false)
            setEditingId(null)
          }}
          onSave={saveEntry}
        />
      )}
    </div>
  )
}
